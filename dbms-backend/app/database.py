#%%
import asyncio
import aiomysql
import dotenv
from typing import Dict
from pprint import pprint

env_file_path = '/home/nanaeilish/projects/dbms/dbms-backend/db.env'
env: Dict[str, str] = dotenv.dotenv_values(env_file_path)
pprint(env)

HOST: str = env.get('HOST')
PORT: int = int(env.get('PORT'))
USER: str = env.get('USER')
PASSWORD: str = env.get('PASSWORD')
DBNAME: str = env.get('DBNAME')

# ('Biology Statistics, Survival Analysis', 'Digital', 'Natural Language Processing, Data Mining, Information Retrieval')

ModMap = {
     'DELETE': (
        """
        DELETE
        FROM Course_Taking as CT
        WHERE CT.SSN = \'P76114511\' AND CT.Cno = 10;
        """, ()
    ),
    'INSERT': ("""
        INSERT INTO Course_Taking (Cno, SSN)
        VALUES (10, \'P76114511\');
        """, ()
    ),
    'UPDATE': (
        """
        UPDATE Student
        SET Name = \'Ching Wen Yang\'
        WHERE SSN = \'P76114511\'
        """, ()
    ),
}


QueryMap = {
    'SELECT': (
        """
        SELECT *
        FROM Department
        """, ()
    ),
    'IN': (
        """
        SELECT D.Dname,
            COUNT(
        *) FROM
                Department as D,
                Classroom as C
            WHERE D.Dno = C.Dnumber
            GROUP BY C.Dnumber
            HAVING COUNT(*) >= 2;
        """, ()
    ),
    'NOT IN': (
        """
        SELECT D.Dname
        FROM Department as D
        WHERE D.Dno NOT IN (
            SELECT Dnumber from Classroom as C);
        """, ()
    ),
    'EXISTS': (
        """
        SELECT DISTINCT S.Name
        FROM Student as S
        WHERE EXISTS (
            SELECT O.SSN
            FROM Oral_Defense as O
            WHERE O.SSN = S.SSN);
        """, ()
    ),
    'NOT EXISTS': (
        """
        SELECT P.PSSN, P.Name
        FROM Professor as P
        WHERE NOT EXISTS (
            SELECT DISTINCT S.AdvisorSSN
            FROM Student as S
            WHERE S.AdvisorSSN = P.PSSN);
        """, ()
    ),
    'COUNT': (
        """
        SELECT COUNT(C.HasAirConditioner)
        FROM Classroom as C
        WHERE C.HasAirConditioner = 1;
        """, ()
    ),
    'SUM': (
        """
        SELECT SUM(C.Capacity)
        FROM Classroom as C, Department as D
        WHERE C.Dnumber=D.Dno AND D.Dname= \'NTU EE\'
        """, ()
    ),
    'MAX': (
        """
        SELECT MAX(C.Capacity)
        FROM Classroom as C, Department as D
        WHERE C.Dnumber=D.Dno AND D.Dname= \'NTU DFLL\'
        """, ()
    ),
    'MIN': (
        r"""
        SELECT MIN(C.Capacity)
        FROM Classroom as C, Department as D
        WHERE C.Dnumber=D.Dno AND D.Dname= 'NCKU CSIE'
        """, ()
    ),
    'AVG': (
        """
        SELECT AVG(C.Capacity)
        FROM Classroom as C
        """, ()
    ),
    'HAVING': (
        """
        SELECT D.Dname, COUNT(*)
        FROM Department as D, Classroom as C
        WHERE D.Dno=C.Dnumber
        GROUP BY C.Dnumber HAVING COUNT(*) >= 2;
        """, ()
    ),
}


async def get_by_query(
        loop: asyncio.AbstractEventLoop,
        btn_type: str):
    pool = await aiomysql.create_pool(host=HOST, port=PORT,
                                      user=USER, password=PASSWORD,
                                      db=DBNAME, loop=loop)

    async with pool.acquire() as conn:
        async with conn.cursor(aiomysql.DictCursor) as cur:
            await cur.execute(*QueryMap[btn_type])
            result = await cur.fetchall()
            print(result)
    pool.close()
    await pool.wait_closed()
    return result

async def get_by_modify(
        loop: asyncio.AbstractEventLoop,
        btn_type: str):
    pool = await aiomysql.create_pool(host=HOST, port=PORT,
                                      user=USER, password=PASSWORD,
                                      db=DBNAME, loop=loop)
    async with pool.acquire() as conn:
        async with conn.cursor(aiomysql.DictCursor) as cur:
            await cur.execute(*ModMap[btn_type])
            affected = cur.rowcount
            await conn.commit()
            await cur.close()
    pool.close()
    await pool.wait_closed()
    result = [{'affected row count': affected}]
    return result

async def get_by_manual_query(
        loop: asyncio.AbstractEventLoop,
        query: str):
    pool = await aiomysql.create_pool(host=HOST, port=PORT,
                                      user=USER, password=PASSWORD,
                                      db=DBNAME, loop=loop)

    async with pool.acquire() as conn:
        async with conn.cursor(aiomysql.DictCursor) as cur:
            await cur.execute(query)
            result = await cur.fetchall()

    pool.close()
    await pool.wait_closed()
    print('manual query:', result)
    return result
