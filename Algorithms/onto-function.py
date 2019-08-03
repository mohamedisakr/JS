def f(x):
    return ((2*x) + 1)


def onto(f, domain, codomain):
    marked = [False] * len(codomain)

    for i in range(0, len(domain)):
        marked[domain[f[i]]]  #marked[f(domain[i])] = True

    for i in range(0, len(codomain)):
        if not marked[i]:
            return False

    return True


domain = [1, 2, 3]
codomain = [3, 5, 7]
res = onto(f, domain, codomain)
print(res)
