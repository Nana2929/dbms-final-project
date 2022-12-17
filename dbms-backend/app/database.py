import asyncio
import aiomysql
import dotenv
from typing import Dict
from pprint import pprint

env_file_path = '/home/nanaeilish/projects/Github/dbms/dbms-backend/db.env'
env: Dict[str, str] = dotenv.dotenv_values(env_file_path)
pprint(env)

HOST: str = env.get('HOST')
PORT: int = int(env.get('PORT'))
USER: str = env.get('USER')
PASSWORD: str = env.get('PASSWORD')
DBNAME: str = env.get('DBNAME')

# ('Biology Statistics, Survival Analysis', 'Digital', 'Natural Language Processing, Data Mining, Information Retrieval')
QueryMap = {
    'SELECT': (
        """
        SELECT *
        FROM Department
        """, ()
    ),
    '_DELETE': (
        """
        DELETE From
            Course as C,
            CourseTaking as CT
        Where
            CT.SSN == \'b09104038\'
            and CT.Cno = C.Cno
        """, ()
    ),
    '_INSERT': ("""
        INSERT INTO CourseTaking (

        Cno, SSN)
        VALUES (10, \'P76114511\');
        """, ()
    ),
    '_UPDATE': (
        """
        UPDATE Student
        SET Name = \'Ching Wen Yang\'
        WHERE SSN = \'P76114511\'
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


async def get_by_manual_query(
        loop: asyncio.AbstractEventLoop,
        query: str):
    print(f"query: {query}")
    pool = await aiomysql.create_pool(host=HOST, port=PORT,
                                      user=USER, password=PASSWORD,
                                      db=DBNAME, loop=loop)
    async with pool.acquire() as conn:
        async with conn.cursor(aiomysql.DictCursor) as cur:
            await cur.execute(query)
            result = await cur.fetchall()
    pool.close()
    await pool.wait_closed()
    print('manual q:', result)
    return result
