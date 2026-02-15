import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div style={styles.card}>
      <img 
        src={image} 
        alt={title} 
        style={styles.image}
      />
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    maxWidth: '350px',
    cursor: 'pointer',
  } as React.CSSProperties,
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover' as const,
    display: 'block',
  } as React.CSSProperties,
  content: {
    padding: '16px',
  } as React.CSSProperties,
  title: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333333',
    margin: '0 0 8px 0',
  } as React.CSSProperties,
  description: {
    fontSize: '14px',
    color: '#666666',
    lineHeight: '1.5',
    margin: '0',
  } as React.CSSProperties,
};

export default Card;
