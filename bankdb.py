import os

import mysql.connector

# MySQL se connection
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password=os.environ.get("ONEBANK_DB_PASSWORD"),
    database="onebankdb"
)
# Check connection
if connection.is_connected():
    print("MySQL connected successfully!")

# Connection close
connection.close()