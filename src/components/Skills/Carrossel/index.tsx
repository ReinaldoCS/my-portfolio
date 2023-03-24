import { slidesInformation } from './imports';
import { Card } from '../Card';

export function Carrossel() {
  return (
    <div>
      {slidesInformation.map((item) => (
        <Card key={item.id} title={item.title} imgUrl={item.img} />
      ))}
    </div>
  );
}
