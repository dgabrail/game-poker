import React from 'react'
interface Props {
  rank: string;
  suit: string;
}

const CardView: React.FC<Props> = ({ rank, suit }) => {
  return (
    <div>
      <span className={"card rank-" + rank + " " + "diams"}>
        <span className="rank">{rank}</span>
        <span className="">{suit}</span>
      </span>
    </div>
  )
}

export default CardView
