-- 如果表不存在则创建 bookmark_categories 表
CREATE TABLE IF NOT EXISTS "bookmark_categories" (
  "id" INTEGER NOT NULL,
  "category_name" TEXT,
  "category_bgimg" TEXT,
  "category_order" INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY ("id")
);

-- 插入默认数据（仅当不存在时）
INSERT INTO bookmark_categories (id, category_name, category_bgimg, category_order)
SELECT 1, '默认收藏', NULL, 0
WHERE NOT EXISTS (SELECT 1 FROM bookmark_categories WHERE id = 1);

-- 创建索引（如果不存在）
CREATE INDEX IF NOT EXISTS "category_id" ON "bookmark_categories" ("id" ASC);

-- 创建daohang表的唯一索引（不区分大小写）
-- 删除唯一索引
DROP INDEX IF EXISTS idx_daohang_classify;

-- 创建普通索引（如果需要加速查询）
CREATE INDEX IF NOT EXISTS id_daohang_classify ON daohang(id);

-- ----------------------------
-- Table structure for user_bookmarks
-- ----------------------------
CREATE TABLE IF NOT EXISTS "user_bookmarks" (
  "id" INTEGER NOT NULL,
  "bookmarks_name" TEXT,
  "bookmarks_path" TEXT,
  "bookmarks_type" integer DEFAULT 0,
  "bookmarks_open" integer DEFAULT 0,
  "category_id" INTEGER,
  "bookmarks_img" TEXT,
  "bookmarks_Label" TEXT,
  "bookmarks_explain" TEXT,
  PRIMARY KEY ("id"),
  CONSTRAINT "category_name_id" FOREIGN KEY ("category_id") REFERENCES "bookmark_categories" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- ----------------------------
-- Records of user_bookmarks
-- ----------------------------
INSERT INTO "user_bookmarks" (id, bookmarks_name, bookmarks_path, bookmarks_type, bookmarks_open, category_id, bookmarks_img, bookmarks_Label, bookmarks_explain)
SELECT 1, 'MTN小说频道', 'http://ipv6.mtnhome.top:8083', 2, 0, 1, 'theme/bookmarks_img/novel.png', '小说', '收集了许多网络小说'
WHERE NOT EXISTS (SELECT 1 FROM user_bookmarks WHERE id = 1);
INSERT INTO "user_bookmarks" (id, bookmarks_name, bookmarks_path, bookmarks_type, bookmarks_open, category_id, bookmarks_img, bookmarks_Label, bookmarks_explain)
SELECT 2, 'MTN网页收藏', 'http://ipv6.mtnhome.top:71', 2, 0, 1, 'theme/bookmarks_img/mtn_webtab.jpg', '网页', '我收藏的需要多网页'
WHERE NOT EXISTS (SELECT 1 FROM user_bookmarks WHERE id = 2);

INSERT INTO "user_bookmarks" (id, bookmarks_name, bookmarks_path, bookmarks_type, bookmarks_open, category_id, bookmarks_img, bookmarks_Label, bookmarks_explain)
SELECT 3, 'MTN论坛', 'http://ipv6.mtnhome.top:8890/pic/upload/forum.php', 2, 0, 1, 'theme/bookmarks_img/mtn_forum.jpg', '网页', '我们俩天，分享的地方'
WHERE NOT EXISTS (SELECT 1 FROM user_bookmarks WHERE id = 3);

INSERT INTO "user_bookmarks" (id, bookmarks_name, bookmarks_path, bookmarks_type, bookmarks_open, category_id, bookmarks_img, bookmarks_Label, bookmarks_explain)
SELECT 4, 'MTN使用帮助', '/html/help/build/html/index.html', 2, 1, 1, 'theme/bookmarks_img/mtn_help.jpg', '网页', 'MTN使用帮助'
WHERE NOT EXISTS (SELECT 1 FROM user_bookmarks WHERE id = 4);

INSERT INTO "user_bookmarks" (id, bookmarks_name, bookmarks_path, bookmarks_type, bookmarks_open, category_id, bookmarks_img, bookmarks_Label, bookmarks_explain)
SELECT 5, 'MTN个人博客', 'http://ipv6.mtnhome.top:8086', 2, 0, 1, 'theme/bookmarks_img/mtn_blog.jpg', '网页', '记录自动的日常点点滴滴'
WHERE NOT EXISTS (SELECT 1 FROM user_bookmarks WHERE id = 5);

INSERT INTO "user_bookmarks" (id, bookmarks_name, bookmarks_path, bookmarks_type, bookmarks_open, category_id, bookmarks_img, bookmarks_Label, bookmarks_explain)
SELECT 6, 'MTN漫画', 'http://ipv6.mtnhome.top:8800', 2, 0, 1, 'theme/bookmarks_img/mtn_comic.jpg', '网页', '我收集的漫画'
WHERE NOT EXISTS (SELECT 1 FROM user_bookmarks WHERE id = 6);

INSERT INTO "user_bookmarks" (id, bookmarks_name, bookmarks_path, bookmarks_type, bookmarks_open, category_id, bookmarks_img, bookmarks_Label, bookmarks_explain)
SELECT 7, 'MTN音乐', 'http://ipv6.mtnhome.top:8890/music/index.php', 2, 0, 1, 'theme/bookmarks_img/mtn_music.jpg', '网页', '音乐'
WHERE NOT EXISTS (SELECT 1 FROM user_bookmarks WHERE id = 7);

INSERT INTO "user_bookmarks" (id, bookmarks_name, bookmarks_path, bookmarks_type, bookmarks_open, category_id, bookmarks_img, bookmarks_Label, bookmarks_explain)
SELECT 8, 'MTN电影', 'http://ipv6.mtnhome.top:8890/video/index.php', 2, 0, 1, 'theme/bookmarks_img/mtn_video.jpg', '网页', '电影部分不能看'
WHERE NOT EXISTS (SELECT 1 FROM user_bookmarks WHERE id = 8);

-- ----------------------------
-- Indexes structure for table user_bookmarks
-- ----------------------------
CREATE INDEX IF NOT EXISTS "bookmarks_id"
ON "user_bookmarks" (
  "id" ASC
);

CREATE INDEX IF NOT EXISTS "bookmarks_name_s"
ON "user_bookmarks" (
  "bookmarks_name" ASC
);

-- Table structure for ai_config
-- ----------------------------
DROP TABLE IF EXISTS "ai_config";
CREATE TABLE "ai_config" (
  "id" INTEGER NOT NULL,
  "ai_gpu_layers" integer DEFAULT -1,
  "ai_context_size" integer,
  "ai_host" TEXT,
  "ai_port" TEXT,
  "ai_verbose_tf" integer,
  "llama_path" TEXT,
  "ai_mode_path" TEXT,
  PRIMARY KEY ("id")
);

-- ----------------------------
-- Records of ai_config
-- ----------------------------
INSERT INTO "ai_config" VALUES (1, -1, 4096, '127.0.0.1', 8080, 0, 'mtn_tool/llama/llama-server.exe', 'mtn_tool/llama/Qwen3-4B-Instruct-2507-IQ4_NL.gguf');


DROP TABLE IF EXISTS "mtn_roast_table";
CREATE TABLE "mtn_roast_table" (
  "id" INTEGER NOT NULL,
  "user" TEXT NOT NULL,
  "content_txt" TEXT NOT NULL,
  "color" TEXT NOT NULL,
  "game_md5" TEXT NOT NULL,
  "user_id" INTEGER NOT NULL,
  "created_at" integer(20) NOT NULL,
  PRIMARY KEY ("id")
);

-- ----------------------------
-- Records of mtn_roast_table
-- ----------------------------

-- ----------------------------
-- Indexes structure for table mtn_roast_table
-- ----------------------------
CREATE INDEX "roast_created_at"
ON "mtn_roast_table" (
  "created_at" ASC
);
CREATE INDEX "roast_game_md5"
ON "mtn_roast_table" (
  "game_md5" ASC
);
CREATE INDEX "roast_id"
ON "mtn_roast_table" (
  "id" ASC
);