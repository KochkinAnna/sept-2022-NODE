db.createUser(
    {
        user: "user",
        pwd: "user",
        roles: [
            {
                role: "readWrite",
                db:"sept-2022-db"
            }
        ]

    }
)