import { Container } from './styles';
import Input from '../components/Input';
import gitlogo from '../assets/gitx.png';
import ItemRepo from '../components/itemRepo';
import Button from '../components/button';
import { useState } from 'react';
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handlePesquisar = async () => {

      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        
      } else{
      alert('REpositorio não encontrado')}
   
  };

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt='icone' />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handlePesquisar} />
      {repos.map(repo => <ItemRepo repo={repo}  />)}
    </Container>
  );
}

export default App;
