const supabase = require('@supabase/supabase-js');
//const createClient = require( '@supabase/supabase-js');

const db = supabase.createClient('https://cmmlqjehakvzuvxbjxgi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtbWxxamVoYWt2enV2eGJqeGdpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODQzNDc1NiwiZXhwIjoyMDI0MDEwNzU2fQ.cmB3nir0z0g-Jr6t_c0UA59nuzQ4JIPtv0FX0fUaWzY')

const express = require('express');
const app = express();

app.use(express.json());

app.get('/contact', (req, res) => {
res.send("HELLO WORLD");
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


// CATHEGORIE
// Insert yamina_burger in product
app.post('/categorie', async (req, res) => {
    const { data,error } = await db
        .from('categories')
        .insert({ name: "salade", nb_product: "0" });
    res.send();
});

// Write a data 
app.get('/categorie', async (req, res) => {
    const { data,error } = await db
        .from('categories')
        .select();
    res.send(data);
});

// delete a row in product
app.delete('/categorie', async (req, res) => {
    const { data,error } = await db
        .from('categories')
        .delete()
        .eq('name', "salade");
    res.send(db);
});


// PRODUCT
// Insert yamina_burger
app.post('/product', async (req, res) => {
    const { data,error } = await db
        .from('product')
        .insert({ name: "yamina_burger", prix: "15" });
    res.send();
});

// Write a data
app.get('/product', async (req, res) => {
    const { data,error } = await db
        .from('product')
        .select();
    res.send(data);
});

// delete a row
app.delete('/product', async (req, res) => {
    const { data,error } = await db
        .from('product')
        .delete()
        .eq('name', "yamina_burger");
    res.send(db);
});