import styles from './Loyalty.module.css'
import starDivider from '../../assets/star-divider.png'
import GroupPhotos from '../../components/GroupPhotos'

import gallery1 from './../../assets/gallery-1.png';
import gallery2 from './../../assets/gallery-2.png';
import sushi1 from './../../assets/sushi1.jpg';
import sushi2 from './../../assets/sushi2.jpg';
import rice1 from './../../assets/rice1.jpg';
import rice2 from './../../assets/rice2.jpg';

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

import Card, { CardContent } from './components/Card';

const cards: CardContent[] = [
    {
        image: CardGiftcardIcon,
        primary: "150",
        secondary: "Bonus points",
        description: "Just for signing up"
    },
    {
        image: RamenDiningIcon,
        primary: "10",
        secondary: "Points",
        description: "Earned for every $1 spent"
    },
    {
        image: CakeIcon,
        primary: "$5",
        secondary: "Birthday Reward",
        description: "During your birth month"
    },
    {
        image: PhoneIphoneIcon,
        primary: "TRACK",
        secondary: "Your points",
        description: "Monitor points anytime"
    },
]

export default function Loyalty() {
    return (
        <>
            <div className={styles.headerContainer}>

                <div className={`${styles.headerLeft} ${styles.fadeUp}`}>
                    <p className={styles.headerTitle}>REWARDS YOU'LL LOVE</p>

                    <h1>
                        FREE APPS, SUSHI, RAMEN,
                        <br />
                        <span>AND MORE</span>
                    </h1>

                    <img
                        className={styles.headerDivider}
                        src={starDivider}
                        alt=""
                    />

                    <p>
                        From savory appetizers to signature ramen and fresh sushi,
                        your next favorite dish could be on us.
                    </p>
                </div>

                <div className={`${styles.headerRight} ${styles.fadeUpDelayed}`}>
                    <GroupPhotos
                        photos={[gallery1, rice1, sushi2, gallery2, rice2]}
                        size={200}
                    />

                    <img
                        className={styles.headerDivider}
                        src={starDivider}
                        alt=""
                    />

                    <div className={styles.joinBlock}>
                        <a
                            href="https://www.toasttab.com/kippo-ramen-606-s-broadway/rewardsSignup"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>JOIN KIPPO REWARDS</button>
                        </a>

                        <p>It's free and takes less than a minute.</p>
                    </div>
                </div>
            </div>

            <div className={styles.cardContainer}>
                {cards.map((card: CardContent, index: number) => (
                    <div
                        className={styles.cardReveal}
                        style={{
                            animationDelay: `${0.25 + index * 0.1}s`
                        }}
                        key={index}
                    >
                        <Card card={card} />
                    </div>
                ))}
            </div>
        </>
    )
}