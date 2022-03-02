import { formatDate } from './Time';
import '@fontsource/vt323';

export const CounterDigit = ({ digit, label }) => {
    return (
        <div
            style={{
                border: '1px solid #005288',
                margin: '0.5em',
                padding: '0.5em',
                borderRadius: '10px',
            }}>
            <div style={{ fontSize: '0.5rem', textAlign: 'center' }}>{label}</div>
            <div
                style={{
                    display: 'inline-flex',
                    fontFamily: 'VT323',
                    fontSize: '1rem',
                }}>
                {digit}
            </div>
        </div>
    );
};

export const Counter = ({ elapsedTime }) => {
    return (
        <div style={{ display: 'flex', widht: '100%', fontSize: '1rem' }}>
            <CounterDigit digit={formatDate(-elapsedTime).years} label='yrs' />

            <CounterDigit digit={formatDate(-elapsedTime).days} label='d' />

            <CounterDigit digit={formatDate(-elapsedTime).hours} label='hrs' />

            <CounterDigit digit={formatDate(-elapsedTime).mins} label='m' />

            <CounterDigit digit={formatDate(-elapsedTime).secs} label='s' />
        </div>
    );
    // <CounterDigit digit={formatDate(-elapsedTime).secs} label='Seconds'
};
