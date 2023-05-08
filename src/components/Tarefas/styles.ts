import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span`
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: #e1a32a;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  border: none;
  width: 100%;
  resize: none;
  display: block;
  margin-top: 16px;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  background-color: #2f3640;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  margin-right: 8px;
  cursor: pointer;
`
