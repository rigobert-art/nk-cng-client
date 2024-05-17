const path = require('node:path');
const fs = require('node:fs');

const databasePath = path.resolve(__dirname, 'LoanDB.json');

const readDatabase = async () => {
    try {
        const data = await fs.readFile(databasePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading database:', err);
        throw err;
    }
};

const writeDatabase = async (database) => {
    try {
        await fs.writeFile(databasePath, JSON.stringify(database, null, 2));
    } catch (err) {
        console.error('Error writing database:', err);
        throw err;
    }
};

// store form

export const LoanRecord = async () => {
    try{
        const database = readDatabase();


    }
} 

// update loan type with userId and type of loan


// add attachements to the database (images )


// store form

export const UpdatedRecord = async () => {
    try {
       


    }
}

export const DeleteRecord = async () => {
    try {
        const database = readDatabase();


    }
}


export const getAllRecord = async () => {
    try {
        const database = readDatabase();


    }
}

export const getIdRecord = async () => {
    try {
        const database = readDatabase();


    }
}

// update loan type with userId and type of loan


// add attachements to the database (images )

