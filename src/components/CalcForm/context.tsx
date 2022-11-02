import { createStandaloneToast } from '@chakra-ui/react'
import React, { createContext, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ICalcFormProviderProps, ICalcFormContextData, ICalcForm } from './types'

const CalcFormContext = createContext({} as ICalcFormContextData)

export const CalcFormProvider: React.FC<ICalcFormProviderProps> = ({
  children,
}) => {
  const form = useForm<ICalcForm>()
  const { toast } = createStandaloneToast()

  const onSubmit = form.handleSubmit((values: ICalcForm) => {
    const { virtualParticipation, virtualExercise, presentialActivity, exam } = values

    const average = ((Number(virtualParticipation) * 10) + (Number(virtualExercise) * 15) + (Number(presentialActivity) * 25) + (Number(exam) * 50)) / 100

    toast({
      title: 'Média',
      description: `Sua média é ${average}`,
      status: 'success',
      position:'top-right',
      duration: 10000,
      isClosable: true,
    })
  })
 
  return (
    <CalcFormContext.Provider value={{
      form,
      onSubmit,
    }}>
      {children}
    </CalcFormContext.Provider>
  )
}

export const useCalcForm = (): ICalcFormContextData => {
  const context = useContext(CalcFormContext)

  if (!context) throw new Error('useCalcForm must be used within a CalcFormProvider')

  return context
}
