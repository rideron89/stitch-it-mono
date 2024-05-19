build PROJECT:
  yarn nx build {{PROJECT}}

serve PROJECT:
  yarn nx serve {{PROJECT}}

# Connect to the local db.
psql:
  psql -h 127.0.0.1 -U admin ebdb_local
