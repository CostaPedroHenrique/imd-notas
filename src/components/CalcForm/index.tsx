import {
  Box,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import NumberInput from '../NumberInput'
import { CalcFormProvider, useCalcForm } from './context'

const CalcFormComponent = () => {
  const {form, onSubmit} = useCalcForm()
  return (
    <form onSubmit={onSubmit}>
      <Box gap={'8px'}>
        <FormControl>
          <FormLabel htmlFor='presentialActivity'>Atividades Presenciais</FormLabel>
          <NumberInput control={form.control} name={'presentialActivity'} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='virtualParticipation'>Participação Virtual</FormLabel>
          <NumberInput control={form.control} name={'virtualParticipation'} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='virtualExercise'>Exercícios Virtuais</FormLabel>
          <NumberInput control={form.control} name={'virtualExercise'} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='exam'>Prova</FormLabel>
          <NumberInput control={form.control} name={'exam'} />
        </FormControl>
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