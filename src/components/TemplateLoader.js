import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TemplateLoader = () => {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        axios.get('/api/templates')
            .then(response => setTemplates(response.data))
            .catch(error => console.error('Error fetching templates:', error));
    }, []);

    return (
        <div>
            <h2>Modelos de Autos</h2>
            <ul>
                {templates.map(template => (
                    <li key={template._id}>{template.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TemplateLoader;
