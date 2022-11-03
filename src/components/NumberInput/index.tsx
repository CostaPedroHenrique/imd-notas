import React from "react"
import { Controller } from "react-hook-form"
import { FormControl, FormErrorMessage, FormLabel, NumberInput as Input, NumberInputField } from '@chakra-ui/react'
import { INumberInputProps } from "./types"

const NumberInput = ({ control, name, label, placeholder }: INumberInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: true,
          message: "Obrigatório",
        },
      }}
      render={({ field: { ref, onChange, value, ...restField }, fieldState: {error} }) => (
        <FormControl isInvalid={!!error?.message} mb={"16px"}>
          <FormLabel>{label}</FormLabel>
          <Input
            {...restField}
            ref={ref}
            min={0}
            max={10}
            value={value}
            onChange={onChange}
            >
            <NumberInputField placeholder={placeholder}/>
          </Input>
          <FormErrorMessage>{error?.message}</FormErrorMessage>
          </FormControl>

      )}
    />
  )
}

export default NumberInput