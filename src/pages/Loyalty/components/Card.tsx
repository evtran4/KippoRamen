import type { SvgIconComponent } from '@mui/icons-material';
import styles from '../Loyalty.module.css';
import starDivider from '../../../assets/star-divider.png'

export type CardContent = {
    image: SvgIconComponent;
    primary: string;
    secondary: string;
    description: string;
};

type CardProps = {
    card: CardContent;
};

export default function Card({ card }: CardProps) {
    const Icon = card.image;

    return (
        <div className={styles.card}>
            <Icon />
            <h2>{card.primary}</h2>
            <h3>{card.secondary}</h3>
            <img src={starDivider} alt="" />
            <p>{card.description}</p>
        </div>
    );
}