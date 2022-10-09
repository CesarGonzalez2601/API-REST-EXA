const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const Departamentos = require('../sample.json');
 

router.get('/', (req, res) => {
    res.json(Departamentos);
});

router.post('/',(req, res)=> {
    const {nombre, cabecera, dencidad, area} = req.body;
    if (nombre && cabecera && dencidad && area){
        const id =  Departamentos.length + 1;
        const newDepartamento = {...req.body, id};
        Departamentos.push(newDepartamento);
        res.json(Departamentos);
    } else{
        res.status(500).json({error: 'Hubo un error'});
    }
});

router.put('/:id', (req, res)=> {
    const {id} = req.params;
    const {nombre, cabecera, dencidad, area} = req.body;
    if (nombre && cabecera && dencidad && area) {
    _.each(Departamentos, (Departamento, i) => {
        if (Departamento.id == id){
            Departamento.nombre = nombre;
            Departamento.cabecera = cabecera;
            Departamento.dencidad = dencidad;
            Departamento.area = area;
        }


    });
    res.json(Departamentos);
} else{
    res.status(500).json({error:'Hubo un error'});
}


})
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(Departamentos, (Departamento, i)=>{
        if(Departamento.id == id){
            Departamentos.splice(i, 1);
        }
    });

    res.send(Departamentos);
});

module.exports = router;