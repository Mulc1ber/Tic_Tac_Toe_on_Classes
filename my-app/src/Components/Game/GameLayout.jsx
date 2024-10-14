import React from 'react';
import { Information } from '../Information/Information';
import { Field } from '../Field/Field';
import { Restart } from '../Restart/Restart';

export const GameLayout = () => {
    return (
        <div className="w-500 h-screen mx-auto flex flex-col justify-center items-center">
            <Information />
            <Field />
            <Restart />
        </div>
    );
};
