import React, { FC } from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
    cell: Cell
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
  
    return (
        <div onClick={() => click(cell)} className={['cell', cell.color, selected ? 'selected': ''].join(' ')}>
            {cell.figure?.logo && <img src={cell.figure.logo} alt='logo' />}
        </div>
    );
};

export default CellComponent;