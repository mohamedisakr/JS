/*
procedure disjoint(S1, S2,..., Sn: subsets of {1, 2, 3, ..., n})
answer := false
for i := 1 to n - 1
  for j := i + 1 to n
    if ai < aj then
      disjoint := true
      for k := 1 to n
        if k ∈ Si and k ∈ Sj then disjoint := false
      if disjoint then answer := true
return answer
*/