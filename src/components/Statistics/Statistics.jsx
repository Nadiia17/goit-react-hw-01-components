import {
  Label,
  StatItem,
  StatList,
  StatisticsSection,
  Title,
  Value,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title className="title">{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <Value>{percentage}%</Value>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};
