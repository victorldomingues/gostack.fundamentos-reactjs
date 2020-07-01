const formatValue = (value: number) => value ? (Number(value.toFixed(2)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })) : 0; // TODO

export default formatValue;
