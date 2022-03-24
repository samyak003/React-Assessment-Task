import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { CustomerListResults } from './customer-list-results';
import { CustomerListToolbar } from './customer-list-toolbar';
import { v4 as uuid } from 'uuid';

const Companies = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        const unsubscribe = async () => {
            await fetch('https://demo1779595.mockable.io/companies', { method: 'POST', body: {} })
                .then((res) => res.json())
                .then((list) => {
                    setCustomers(
                        list.companiesList.map((customer) => {
                            return { id: uuid(), ...customer };
                        })
                    );
                });
        };
        unsubscribe();
    }, []);
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth={false}>
                <CustomerListToolbar />
                <Box sx={{ mt: 3 }}>
                    <CustomerListResults customers={customers} />
                </Box>
            </Container>
        </Box>
    );
};

export default Companies;
