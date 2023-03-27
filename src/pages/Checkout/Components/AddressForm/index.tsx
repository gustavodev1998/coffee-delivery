import { CheckoutAddressForm } from "./styles";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";
import { useCart } from "../../../../hooks/useCart";

export enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.string().min(1, "Informe o Número"),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

export type ConfirmOrderFormData = OrderData;

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { insertAddressInfo } = useCart();

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  async function handleConfirmOrder(data: ConfirmOrderFormData) {
    insertAddressInfo(data);

    reset();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutAddressForm onSubmit={handleSubmit(handleConfirmOrder)}>
        <input type="text" placeholder="CEP" required {...register("cep")} />
        <input type="text" placeholder="Rua" required {...register("street")} />

        <div className="formRow">
          <input
            type="number"
            placeholder="Número"
            required
            {...register("number", { valueAsNumber: true })}
          />
        </div>

        <div className="formRow">
          <input
            type="text"
            placeholder="Bairro"
            required
            {...register("district")}
          />
          <input
            type="text"
            placeholder="Cidade"
            required
            {...register("city")}
          />
          <input type="text" placeholder="UF" required {...register("uf")} />
        </div>
      </CheckoutAddressForm>
    </FormProvider>
  );
}
