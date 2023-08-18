import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <Input type="text" placeholder="Nome" />

      <Input type="text" placeholder="Email" />

      <Input type="text" placeholder="Telefone" />

      <Select>
        <option value="123">Instagram</option>
        <option value="123">Facebook</option>
        <option value="123">Whatsapp</option>
        <option value="123">Twitter</option>
      </Select>

      <Button type="button">
        Salvar alterações
      </Button>

      <Button type="button" disabled>
        Salvar alterações
      </Button>
    </>
  );
}
