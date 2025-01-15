import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

const App = () => {
  // Estat per a les vendes i el formulari
  const [vendes, setVendes] = useState([]);
  const [producte, setProducte] = useState('');
  const [quantitat, setQuantitat] = useState('');
  const [preu, setPreu] = useState('');
  const [dataVenda, setDataVenda] = useState('');
  const [editId, setEditId] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [producteError, setProducteError] = useState('');
  const [quantitatError, setQuantitatError] = useState('');
  const [preuError, setPreuError] = useState('');
  const [dataVendaError, setDataVendaError] = useState('');

  // Carrega les vendes de la base de dades quan es carrega el component
  useEffect(() => {
    fetchVendes();
  }, []);

  // Funció per obtenir les vendes de la base de dades
  const fetchVendes = async () => {
    const response = await axios.get('http://localhost:3001/vendes');
    setVendes(response.data);
  };

  // Afegir una nova venda
  const addVenda = async () => {
    if (quantitat < 0 || preu < 0) {

    }
    else {
      await axios.post('http://localhost:3001/vendes', { producte, quantitat, preu, data_venda: dataVenda });
      fetchVendes();
      resetForm();
    }
  };

  // Actualitzar una venda existent
  const updateVenda = async () => {
    await axios.put(`http://localhost:3001/vendes/${editId}`, { producte, quantitat, preu, data_venda: dataVenda });
    fetchVendes();
    resetForm();
  };

  // Eliminar una venda
  const deleteVenda = async (id) => {
    await axios.delete(`http://localhost:3001/vendes/${id}`);
    fetchVendes();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editId ? updateVenda() : addVenda();
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000); 
    if (producte.trim() === '') {
      setProducteError(true);
    } else {
      setProducteError(false);
    }
    if (preu.trim() === '' || preu < 0) {
      setPreuError(true);
    } else {
      setPreuError(false);
    }
    if (quantitat.trim() === '' || quantitat < 0) {
      setQuantitatError(true);
    } else {
      setQuantitatError(false);
    }
    if (dataVenda.trim() === '') {
      setDataVendaError(true);
    } else {
      setDataVendaError(false);
    }
  };

  const handleReset = () => {
    setProducte('');
    setQuantitat('');
    setPreu('');
    setDataVenda('');
  };
  

  // Reiniciar el formulari
  const resetForm = () => {
    setProducte('');
    setQuantitat('');
    setPreu('');
    setDataVenda('');
    setEditId(null);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 className="text-center">Gestió de Vendes</h2>
        </Col>
      </Row>
      {showConfirmation && <p>Formulari enviat amb èxit</p>}
      <Row className="my-4">
        <Col md={{ span: 6, offset: 3 }}>
          {/* Formulari per afegir o actualitzar vendes */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="producte">
              <Form.Label>Producte</Form.Label>
              <Form.Control
                type="text"
                placeholder='Nom del producte'
                className={`form-control ${producteError ? 'is-invalid' : ''}`}
                value={producte}
                onChange={(e) => setProducte(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="quantitat">
              <Form.Label>Quantitat</Form.Label>
              <Form.Control
                type="number"
                placeholder="Quantitat"
                className={`form-control ${quantitatError ? 'is-invalid' : ''}`}
                value={quantitat}
                onChange={(e) => setQuantitat(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="preu">
              <Form.Label>Preu</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                placeholder="Preu per unitat"
                className={`form-control ${preuError ? 'is-invalid' : ''}`}
                value={preu}
                onChange={(e) => setPreu(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dataVenda">
              <Form.Label>Data de Venda</Form.Label>
              <Form.Control
                type="date"
                className={`form-control ${dataVendaError ? 'is-invalid' : ''}`}
                value={dataVenda}
                onChange={(e) => setDataVenda(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              {editId ? 'Actualitzar Venda' : 'Afegir Venda'}
            </Button>
            <Button type="button" className="w-100" onClick={handleReset}>
              Netejar
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          {/* Taula per mostrar les vendes */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Producte</th>
                <th>Quantitat</th>
                <th>Preu</th>
                <th>Data de Venda</th>
                <th>Accions</th>
              </tr>
            </thead>
            <tbody>
              {vendes.map((venda, index) => (
                <tr key={venda.id}>
                  <td>{index + 1}</td>
                  <td>{venda.producte}</td>
                  <td>{venda.quantitat}</td>
                  <td>{venda.preu}</td>
                  <td>{venda.data_venda}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => {
                        setEditId(venda.id);
                        setProducte(venda.producte);
                        setQuantitat(venda.quantitat);
                        setPreu(venda.preu);
                        setDataVenda(venda.data_venda);
                      }}
                      className="me-2"
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteVenda(venda.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default App;