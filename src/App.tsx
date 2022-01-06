import { useState } from 'react'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionsTable";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";


Modal.setAppElement('#root');


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)


  function handleNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true)
  }


  function handleNewTransactionModalClose() {
    setIsNewTransactionModalOpen(false)
  }


  return (
    <>
      <Header onOpenNewTransactionModal={handleNewTransactionModalOpen} />
      <Dashboard />
      <TransactionsTable />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}>
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
