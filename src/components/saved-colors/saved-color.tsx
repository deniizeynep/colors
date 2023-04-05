import { Dispatch, MouseEventHandler } from 'react';
import Button from '../shared/button';
import ColorChangeSwatch from '../shared/color-change-swatch';
import { AdjustColorActions } from '../../color-reducer';

type SavedColorProps = {
  name: string;
  hexColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  dispatch: Dispatch<AdjustColorActions>
  onRemove?: () => void;
};

const SavedColor = ({ name, hexColor, onClick, onRemove }: SavedColorProps) => {
  return (
    <article className="flex items-center gap-2 place-content-between">
      <ColorChangeSwatch hexColor={hexColor} onClick={() => dispatchEvent({ type: 'update-hex-color', payload: { hexColor } })
      } />
      <h3 className="text-sm whitespace-nowrap">{name}</h3>
      <Button variant="destructive" size="small" onClick={onRemove}>
        Remove
      </Button>
    </article>
  );
};

export default SavedColor;
