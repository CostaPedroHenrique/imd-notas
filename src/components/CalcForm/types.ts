import { ReactNode } from "react"
import { UseFormReturn } from "react-hook-form"

interface ICalcFormProviderProps {
  children: ReactNode
}

interface ICalcForm {
  virtualParticipation: number
  virtualExercise: number
  presentialActivity: number
  exam: number
}
interface ICalcFormContextData {
  form: UseFormReturn<ICalcForm, any>
  onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
  needsOnExam: string | undefined

} 
export type { ICalcFormProviderProps, ICalcFormContextData, ICalcForm }