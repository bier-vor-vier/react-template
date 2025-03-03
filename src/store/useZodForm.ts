import { useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema, TypeOf } from "zod";

export function useZodForm<TSchema extends ZodSchema>(
    schema: TSchema,
    options?: UseFormProps<TypeOf<TSchema>>
) {
    const translatedSchema = schema.refine((data) => data, {});
    return useForm<TypeOf<TSchema>>({
        ...options,
        resolver: zodResolver(translatedSchema),
    });
}