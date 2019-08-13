/*
initialize M so that mij = ai if j ≥ i and mij = 0 otherwise
for i := 1 to n
    for j := i + 1 to n
        for k := i + 1 to j
            mij := min(mij, ak)
return M = {mij} {mij is the minimum term of ai, ai+1, … , aj}
*/