import { useEffect, useState } from "react";

export default function CardStats({ h2hPlayer1, h2hPlayer2, title }) {

    h2hPlayer1['minutes_per_goal'] = (h2hPlayer1.minutes / h2hPlayer1.goals_scored).toFixed(0)
    h2hPlayer2['minutes_per_goal'] = (h2hPlayer2.minutes / h2hPlayer2.goals_scored).toFixed(0)

    const [currStat, setCurrStat] = useState([
        { label: 'Goals', key: 'NA' },
        { label: 'Assists', key: 'NA' },
        { label: 'Assists', key: 'NA' },
        { label: 'Assists', key: 'NA' },
        { label: ' Assists', key: 'NA' }
    ])
    useEffect(() => {
        if (title === 'Overview') {
            setCurrStat([
                { label: 'Goals', key: 'goals_scored' },
                { label: 'Assists', key: 'assists' },
                { label: 'Points per game', key: "points_per_game" },
                { label: 'Clean Sheet', key: 'clean_sheets' },
                { label: 'Yellow Cards', key: 'yellow_cards' },
                { label: 'Red Cards', key: 'red_cards' }
            ])
        }
        if (title === 'Attacking') {
            setCurrStat([
                { label: 'Goals', key: 'goals_scored' },
                { label: 'Goals per match', key: 'goals_per_match' },
                { label: 'Minutes per goal', key: 'minutes_per_goal' },
                { label: 'Panelties order', key: 'penalties_order' },
            ])
        }
        if (title === 'Defending') {
            setCurrStat([
                { label: 'Clean sheet', key: 'clean_sheets' },
                { label: 'Goals Conceded', key: 'goals_conceded' },
                { label: 'Own goals', key: 'own_goals' },
                { label: 'Penalties saved', key: 'penalties_saved' },
            ])
        }
        if (title === 'Goalkeeping') {
            setCurrStat([
                { label: 'Clean sheet', key: 'clean_sheets' },
                { label: 'Goals Conceded', key: 'goals_conceded' },
                { label: 'Saves', key: 'saves' },
                { label: 'penalties saved', key: 'penalties_saved' },
            ])
        }
        if (title === 'Matches') {
            setCurrStat([
                { label: 'Minutes played', key: 'minutes' },
                { label: 'Matches started', key: 'starts' },
                { label: 'Bonus received', key: 'bonus' },
                { label: 'Goals conceded 90 min', key: 'goals_conceded_per_90' },

            ])
        }
        if (title === 'Stats') {
            setCurrStat([
                { label: 'Influence', key: 'influence' },
                { label: 'Creativity', key: "creativity" },
                { label: 'Threat', key: 'threat' },
            ])
        }
    }, [title])

    return (
        <div className="h2h-table">
            {currStat.map((stat, index) => (
                <div key={index}>
                    <div className="h2h-row-container">
                        <div className="h2h-row">{h2hPlayer1[stat.key]}</div>
                        {stat.label}
                        <div className="h2h-row">{h2hPlayer2[stat.key]}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
