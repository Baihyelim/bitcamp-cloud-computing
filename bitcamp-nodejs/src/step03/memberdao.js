// 주제: DAO 모듈 만들기

var pool;

exports.setConnectionPool = (connectionPool) => {
    pool = conncetionPool;
};

exports.list = (pageNo = 1, pageSize = 3, handler) = > {
    var startIndex = (pageNo -1) *pageSize;
    
    pool.query('select mid, email from pms2_member limit ?, ?',
            [startIndex, pageSize],
            function(err, results) {
        handler(err, results); 
        
    });
};

exports.add = (data, handler) => {
    
}


















