require('dotenv').config()

const supabase = require('@supabase/supabase-js')
const SUPABASE_URL = 'https://dnvzavjmxhnqnnecrzsb.supabase.co'
// const supabaseClient = supabase.createClient(SUPABASE_URL, process.env.SUPABASE_KEY)
const supabaseClient = supabase.createClient(SUPABASE_URL, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTY4NzkwNiwiZXhwIjoxOTQ3MjYzOTA2fQ.BkjUN0IJDBo3RKDnvhxd1X-B-glREsoDDj5Gbvxbm2s")


// Get all techniques from Supabase!

const getData = (style, mode) => {
    if (style === 'both') {
    return supabaseClient.from('techniques')
    .select('*')
    .eq('mode', mode)
    .then( (results) => { return results.data})

    }
    else if (style === 'gi') {
    return supabaseClient.from('techniques')
    .select('*')
    .eq('gi', 'true')
    .eq('mode', mode)
    .then( (results) => { return results.data})
    }
    else if (style === 'nogi') {
        return supabaseClient.from('techniques')
        .select('*')
        .eq('nogi', 'true')
        .eq('mode', mode)
        .then( (results) => { return results.data})
    }

}


module.exports = {
    getData: getData

}
