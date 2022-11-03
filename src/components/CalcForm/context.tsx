import { createStandaloneToast } from '@chakra-ui/react'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ICalcFormProviderProps, ICalcFormContextData, ICalcForm } from './types'

const CalcFormContext = createContext({} as ICalcFormContextData)

export const CalcFormProvider: React.FC<ICalcFormProviderProps> = ({
  children,
}) => {
  const form = useForm<ICalcForm>({mode: 'all'})
  const { toast } = createStandaloneToast()
  const [needsOnExam, setNeedsOnExam] = useState<string | undefined>(undefined)

  const presentialActivityWatch = form.watch('presentialActivity')
  const virtualParticipationWatch = form.watch('virtualParticipation')
  const virtualExerciseWatch = form.watch('virtualExercise')


  const needOnExam = () => {
    if(presentialActivityWatch && virtualParticipationWatch && virtualExerciseWatch){
      const sum = presentialActivityWatch * 25 + virtualParticipationWatch  * 10 + virtualExerciseWatch * 15
      const result = (500 - sum) / 50
      setNeedsOnExam(`Precisa de ${result.toFixed(2)} na prova`)
      
    }
    else {
      setNeedsOnExam(undefined)
    }
    
  }

  const onSubmit = form.handleSubmit((values: ICalcForm) => {
    const { virtualParticipation, virtualExercise, presentialActivity, exam } = values

    const average = ((Number(virtualParticipation) * 10) + (Number(virtualExercise) * 15) + (Number(presentialActivity) * 25) + (Number(exam) * 50)) / 100

    if(average >= 5){
      toast({
        title: 'Você foi aprovado!',
        description: `Sua média é ${average}`,
        status: 'success',
        position:'top-right',
        duration: 10000,
        isClosable: true,
      })
    }
    else if (average >= 3) {
      toast({
        title: 'Você está de recuperação nesta disciplina!',
        description: `Sua média é ${average}`,
        status: 'warning',
        position:'top-right',
        duration: 10000,
        isClosable: true,
      })
    }

    else {
      toast({
        title: 'Você foi reprovado nesta disciplina!',
        description: `Sua média é ${average}`,
        status: 'error',
        position:'top-right',
        duration: 10000,
        isClosable: true,
      })
    }
  })

  useEffect(() => {
    needOnExam()
  }, [presentialActivityWatch, virtualParticipationWatch, virtualExerciseWatch])
 
  return (
    <CalcFormContext.Provider value={{
      needsOnExam,
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
