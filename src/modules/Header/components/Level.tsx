import React from 'react'
import styled from 'styled-components'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

type Props = { userWZData: any }

function Level({ userWZData }: Props) {

    const data = [
        { name: 'Gained', value: userWZData.levelXpGained || 0 },
        { name: 'Remaining', value: userWZData.levelXpRemainder || 0 },
    ];
    const COLORS = ['#C9D494', 'rgba(90,90,90,1)'];

    return (
        <Wrapper>
            <ResponsiveContainerWrapper width="100%" height="100%" >
                <PieChart >
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius="80%"
                        outerRadius="110%"
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} stroke="none" fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainerWrapper>
            {userWZData.level}</Wrapper>
    )
}

const Wrapper = styled.div`
width: 4vw;
height: 2.4vw;
font-size: 1.5vw;
display: flex;
align-items: center;
`

const ResponsiveContainerWrapper = styled(ResponsiveContainer)`
    position: relative;
`

export default Level