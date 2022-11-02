import React from "react"
import { Controller } from "react-hook-form"
import { NumberInput as Input, NumberInputField } from '@chakra-ui/react'
import { INumberInputProps } from "./types"

const NumberInput = ({ control, name }: INumberInputProps) => {
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
      render={({ field: { ref, onChange, value, ...restField } }) => (
        <Input
          {...restField}
          ref={ref}
          min={0}
          max={10}
          value={value}
          precision={2}
          step={0.2}
          onChange={onChange}
        >
          <NumberInputField />
        </Input>
      )}
    />
  )
}

export default NumberInput