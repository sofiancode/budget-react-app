import  Container  from "react-bootstrap/Container"
import  { Stack, Button } from "react-bootstrap"
import { BudgetCard } from "./components/BudgetCard"
import { AddBudgetModal } from "./components/AddBudgetModal"


function App() {


  return (
    <>
    <Container className="mb-4">
      <Stack direction='horizontal' gap='2' className='mb-4'>
      <h1 className="me-auto">Budgets</h1>
      <Button variant='primary'>Add Budgets</Button>
      <Button variant='outline-primary'>Add Expense</Button>
      </Stack>
      <div style={{
             display:'grid',
             gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
             gap: '1rem',
             alignItems: 'flex-start'
             }}>
          <BudgetCard
           name='Entertainment'
           gray
           amount={1200}
           max={1000}></BudgetCard>
      </div>
    </Container>
    <AddBudgetModal show />
    </>
  )
}

export default App
