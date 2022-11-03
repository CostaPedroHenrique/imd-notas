import {
  Box,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import NumberInput from '../NumberInput'
import { CalcFormProvider, useCalcForm } from './context'

const CalcFormComponent = () => {
  const {form, onSubmit, needsOnExam} = useCalcForm()
  return (
    <form onSubmit={onSubmit}>
      <Box gap={'8px'}>
          <NumberInput control={form.control} name={'presentialActivity'} label={"Atividades Presenciais"} />
          <NumberInput control={form.control} name={'virtualParticipation'} label={"Participação Virtual"} />
          <NumberInput control={form.control} name={'virtualExercise'} label={"Exercícios Virtuais"} />
          <NumberInput control={form.control} name={'exam'} label={"Prova"} placeholder={needsOnExam}/>
        <Button mt={4} colorScheme='teal' isLoading={form.formState.isSubmitting} type='submit'>
          Calcular
        </Button>
      </Box>

    </form>
  )
}

const CalcForm = () => {
  return (
    <CalcFormProvider>
      <CalcFormComponent />
    </CalcFormProvider>
  )
}

export default CalcForm