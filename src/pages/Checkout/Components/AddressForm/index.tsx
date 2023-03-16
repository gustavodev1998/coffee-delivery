import { CheckoutAddressForm, InputWrapper } from "./styles";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.string().min(1, "Informe o Número"),
  /* complement: zod.string(), */
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

type ConfirmOrderFormData = OrderData;

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  function handleConfirmOrder(data: ConfirmOrderFormData) {}

  /*   const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType; */

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutAddressForm onSubmit={handleSubmit(handleConfirmOrder)}>
        {/* TROCAR CLASSNAME DPS */}

        <input type="text" placeholder="CEP" />
        <input type="text" name="Rua" id="Rua" placeholder="Rua" />

        <div className="formRow">
          <input type="number" name="Numero" id="Numero" placeholder="Número" />

          <input
            type="text"
            name="Complemento"
            id="Complemento"
            placeholder="Complemento"
          />
        </div>

        <div className="formRow">
          <input type="text" name="Bairro" id="Bairro" placeholder="Bairro" />
          <input type="text" name="Cidade" id="Cidade" placeholder="Cidade" />
          <input type="text" name="UF" id="UF" placeholder="UF" />
        </div>
      </CheckoutAddressForm>
    </FormProvider>
  );
}
