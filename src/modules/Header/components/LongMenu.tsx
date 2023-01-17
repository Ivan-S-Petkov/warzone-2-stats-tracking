import React from 'react'
import styled from 'styled-components'
import ShortMenu from './ShortMenu'

function LongMenu() {
  return (
    <LongMenuWrapper>
      <Section>
        <ShortMenu />
      </Section>
      <Section>

      </Section>
      <Section>
        React
      </Section>
    </LongMenuWrapper>
  )
}

const LongMenuWrapper = styled.div`
  top: 0px;
  right: 40px;
  min-width: 200px;
  width: 20%;
  height: 100%;
  border-left: 2px solid rgba(130,130,130,1);
  border-right: 2px solid rgba(130,130,130,1);
  background-color: rgba(80,80,80,1);
  visibility: visible;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Section = styled.div`
  height:130px;
  display: flex;
  justify-content: center;
  align-items: center;

  :first-of-type{
  background-color: rgba(100,100,100,1);
  }

  :last-of-type{
  bottom: 0px;
  background-color: rgba(60,60,60,1);
  }
`

export default LongMenu