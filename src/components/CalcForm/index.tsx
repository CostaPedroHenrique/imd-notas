import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { CalcFormProvider, useCalcForm } from './context'

const CalcFormComponent = () => {
  const {form, onSubmit} = useCalcForm()
  return (
    <form onSubmit={onSubmit}>
      <Box gap={'8px'}>
        <FormControl>
          <FormLabel htmlFor='virtualParticipation'>Participação Virtual</FormLabel>
          <Input
            type="number"
            min={0}
            max={10}
            id='virtualParticipation'
            placeholder='Participação Virtual'
            {...form.register('virtualParticipation', {
              required: 'Obrigatório',
            })}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='virtualExercise'>Exercícios Virtuais</FormLabel>
          <Input
            type="number"
            min={0}
            max={10}
            id='virtualExercise'
            placeholder='Exercícios Virtuais'
            {...form.register('virtualExercise', {
              required: 'Obrigatório',
            })}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='presentialActivity'>Atividades Presenciais</FormLabel>
          <Input
            type="number"
            min={0}
            max={10}
            id='presentialActivity'
            placeholder='Atividades Presenciais'
            {...form.register('presentialActivity', {
              required: 'Obrigatório',
            })}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='exam'>Prova</FormLabel>
          <Input
            type="number"
            id='exam'
            min={0}
            max={10}
            placeholder='Prova'
            {...form.register('exam', {
              required: 'Obrigatório',
            })}
          />
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