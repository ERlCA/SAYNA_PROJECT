def compter_nombres_pairs(liste_nombres: list[float]) -> int | None:
    """
    Trouver et compter les nombres pairs dans une liste
    """
    nombres_pairs = []

    for nombre in liste_nombres:
        if nombre % 2 == 0:
            nombres_pairs.append(nombre)

    print(f"Nombre de pairs trouvés : {len(nombres_pairs)}")
    print(f"Nombres pairs : {nombres_pairs}")
    return len(nombres_pairs)
