import React from 'react';
import axios from 'axios';

const PublishButton = () => {
    const handlePublish = () => {
        axios.post('/api/publish')
            .then(response => alert('Publicación realizada con éxito'))
            .catch(error => {
                console.error('Error publicando:', error);
                alert('Ocurrió un error al publicar.');
            });
    };

    return <button onClick={handlePublish}>Publicar en Mercado Libre</button>;
};

export default PublishButton;
