document.addEventListener('DOMContentLoaded', () => {

    // --- 核心配置区域 ---
    const memeCategories = [
        {
            name: '企鹅',
            path: 'assets/penguins',
            images: [
                "18禁.jpg", "一枪崩死你老妈.webp", "两块五小时.jpg", "严禁嫖娼.jpg", "产品黄色发给我.jpg",
                "仇人全给我乱刀砍死.jpg", "任命你们把片删了.webp", "你也嫖娼？.jpg", "兄弟快走是仙人跳.jpg",
                "全速赶往嫖娼现场.jpg", "准备下海.jpg", "努力搬砖买片中.jpg", "匹配中.webp", "十月雅俗共赏.jpg",
                "十月雅俗共赏中.jpg", "双枪射击你妈的奶头.jpg", "发现原味胖次.webp", "发现组织.webp", "受着.webp",
                "吃我大鸡巴.jpg", "吃我飞天大草.jpg", "品鉴中.jpg", "唯有宝剑能撬动美人逼.jpg", "处男大赛总冠军登场.jpg",
                "好想导管.jpg", "嫖娼被抓获.jpg", "嫖完就跑从你我做起.webp", "嫖完就跑，从你我做起.jpg",
                "寻找嫖娼地中，就差你了.jpg", "导管中.webp", "小心同性恋.webp", "巅峰时期的我.webp", "已匹配到炮友.jpg",
                "已找到片.jpg", "已找到黄色网站.jpg", "我有大鸡巴.webp", "我生来就不是受苦的料.jpg",
                "我真得控制你了.jpg", "我要看基佬.jpg", "我要重新戒撸.webp", "所有人放下手机单手操作.webp",
                "所有人来吃我鸡巴.jpg", "找片中.jpg", "找资源的我belike.jpg", "拍片赚钱中.jpg",
                "探花博主观察中.jpg", "推理产品做爱过程中.jpg", "撸出血了.jpg", "操逼中.jpg", "操逼博士学成归来.jpg",
                "操逼大赛总冠军登场.jpg", "敢拉黑我就问候你的父母.webp", "未能寻到嫖娼地点.webp", "欣赏生殖器.jpg",
                "正在举报黄片网站.jpg", "正在享用新鲜逼水.jpg", "正在传授操逼魔法.jpg", "正在偷学日语.webp",
                "正在创作淫秽物品.jpg", "正在前往约炮地点.jpg", "正在发动鬼脑意淫.jpg", "正在复习日语.jpg",
                "正在学习生物学.jpg", "正在宣传卖淫场所.jpg", "正在寻找卖淫场所.jpg", "正在寻找好友中.webp",
                "正在寻找嫖娼地点.jpg", "正在寻找炮友中.jpg", "正在录制吃鸡巴影片.jpg", "正在打击嫖娼现场.jpg",
                "正在打击约炮场所.jpg", "正在拍摄黄片中.jpg", "正在搜索黄片.jpg", "正在操控你的飞机.jpg",
                "正在收购91.jpg", "正在查询卖淫场所.jpg", "正在查阅成分.jpg", "正在狩猎野生嫩逼.jpg",
                "正在猎杀举报嫖娼者.webp", "正在玩galgame.jpg", "正在研究操逼技巧.jpg", "正在绘制吃鸡巴图片.jpg",
                "正在翻开豹皮.jpg", "正在联系拼机队友.jpg", "正在联系拼机队友.webp", "正在联系约炮小姐.jpg",
                "正在联系肛肠科医生.jpg", "正在肃清卖淫场所.jpg", "正在被口中.jpg", "正在讨要家产黄图.jpg",
                "正在讨要黄片网站.jpg", "正在记录嫖客口供.webp", "正在调查日本女特务.jpg", "正在购买飞机杯.jpg",
                "正在逃离警察追捕.webp", "正在逃离警方视线.jpg", "正在阅读基佬漫画.jpg", "清理秘密污渍中.jpg",
                "现场指导家产做爱中.png", "瓢虫高调路过.webp", "男人再富也要卖.jpg", "男人再穷也别卖身.webp",
                "男人再穷也要嫖.webp", "直女摸屌观看中.webp", "看报中.jpg", "看看腿.jpg", "真男人只干男人.jpg",
                "真男人嫖娼不给钱.jpg", "禁黄.webp", "约炮没给钱.jpg", "航班已结束.webp", "航班结束.jpg",
                "色情消息秒回.jpg", "誓死保卫青楼.webp", "警方已强制介入.webp", "请输入文本.webp", "诺贝尔操逼奖得主登场.webp",
                "谁想吸吸我生殖器.jpg", "谁有兄妹乱伦的本子.jpg", "谁有哥哥草妹妹的本子.jpg", "谁有男娘本子.webp",
                "谁有萌妹扣大叔的本子.jpg", "谁有黄片.jpg", "谁理你.webp", "起飞.webp", "过来.webp", "遥控产品操逼中.jpg",
                "阅读百合漫画.jpg", "青春期对我的影响.jpg", "预备SM中.webp", "高雅人士视察.jpg", "鹿管.webp",
                "黄片网站加载中.jpg"
            ]
        }
    ];
    // --- 配置区域结束 ---


    const categoryList = document.getElementById('category-list');
    const galleryContainer = document.getElementById('gallery-container');
    const currentCategoryTitle = document.getElementById('current-category-title');
    const menuToggle = document.getElementById('menu-toggle');
    const contextMenu = document.getElementById('custom-context-menu');

    function populateSidebar() {
        memeCategories.forEach((category, index) => {
            const imageCount = category.images.length;
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = `${category.name} (${imageCount})`;
            a.dataset.categoryIndex = index;
            if (index === 0) a.classList.add('active');
            li.appendChild(a);
            categoryList.appendChild(li);
        });
    }

    function showCategory(categoryIndex) {
        const category = memeCategories[categoryIndex];
        if (!category) return;

        currentCategoryTitle.textContent = category.name;
        galleryContainer.innerHTML = '';

        category.images.forEach(filename => {
            const imagePath = `${category.path}/${filename}`;
            const item = document.createElement('div');
            item.className = 'gallery-item';

            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';

            const img = document.createElement('img');
            img.className = 'meme-image';
            img.src = imagePath;
            img.alt = filename;
            img.loading = 'lazy';

            const overlay = document.createElement('div');
            overlay.className = 'image-overlay';

            const downloadLink = document.createElement('a');
            downloadLink.href = imagePath;
            downloadLink.setAttribute('download', filename);
            downloadLink.className = 'download-link';
            downloadLink.title = `下载 ${filename}`;
            
            const downloadIcon = document.createElement('img');
            downloadIcon.src = 'assets/download-icon.png';
            downloadIcon.className = 'download-icon';
            downloadIcon.alt = 'Download';

            downloadLink.appendChild(downloadIcon);
            overlay.appendChild(downloadLink);
            
            imageContainer.appendChild(img);
            imageContainer.appendChild(overlay);
            item.appendChild(imageContainer);
            
            const filenameDiv = document.createElement('div');
            filenameDiv.className = 'filename';
            filenameDiv.textContent = filename;
            item.appendChild(filenameDiv);
            
            galleryContainer.appendChild(item);

            // 为每个图片容器添加右键菜单事件
            // 不再拦截图片区域的右键，允许浏览器原生菜单（复制图像/链接更稳定）
            imageContainer.addEventListener('contextmenu', (e) => {
                hideContextMenu(); // 关闭可能存在的自定义菜单
                // 保留浏览器原生右键菜单
            });
        });

        document.querySelectorAll('.category-list a').forEach(a => {
            a.classList.remove('active');
            if (a.dataset.categoryIndex == categoryIndex) {
                a.classList.add('active');
            }
        });

        if (window.innerWidth <= 768) {
            document.body.classList.remove('sidebar-opened');
        }
    }
    
    // --- 以下是修改后的函数 ---
    // 显示和定位右键菜单（使用 clientX/clientY + position:fixed 更稳健）
    function showContextMenu(event, imagePath, filename) {
        contextMenu.style.display = 'block';
        
        // 使用 clientX/clientY（相对于视口），配合 position: fixed 使用最稳定
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        
        // 先把菜单放在鼠标点击的位置（相对于视口）
        contextMenu.style.left = `${mouseX}px`;
        contextMenu.style.top = `${mouseY}px`;

        // 获取窗口和菜单的尺寸
        const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
        const { offsetWidth: menuWidth, offsetHeight: menuHeight } = contextMenu;

        // 如果右侧超出视口，则把菜单显示在鼠标左侧
        if (mouseX + menuWidth > windowWidth) {
            let newLeft = mouseX - menuWidth;
            // 保证不超出左侧
            if (newLeft < 0) newLeft = 0;
            contextMenu.style.left = `${newLeft}px`;
        }

        // 如果底部超出视口，则把菜单显示在鼠标上方
        if (mouseY + menuHeight > windowHeight) {
            let newTop = mouseY - menuHeight;
            // 保证不超出顶部
            if (newTop < 0) newTop = 0;
            contextMenu.style.top = `${newTop}px`;
        }

        // 绑定数据到菜单上，供后续操作使用
        contextMenu.dataset.imagePath = imagePath;
        contextMenu.dataset.filename = filename;
    }
    // --- 函数修改结束 ---

    // 隐藏右键菜单
    function hideContextMenu() {
        if (contextMenu.style.display === 'block') {
            contextMenu.style.display = 'none';
        }
    }

    // --- 事件监听 ---

    // 允许图片区域使用浏览器原生右键菜单；非图片区域也不强制拦截
    document.addEventListener('contextmenu', e => {
        if (contextMenu.contains(e.target)) return;
        hideContextMenu();
        // 不再阻止默认行为，原生菜单可用
    });


    categoryList.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            showCategory(e.target.dataset.categoryIndex);
        }
    });

    menuToggle.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.body.classList.toggle('sidebar-opened');
        } else {
            document.body.classList.toggle('sidebar-collapsed');
        }
    });

    // 全局左键点击事件，用于隐藏菜单
    window.addEventListener('click', hideContextMenu);


    // 剪贴板权限检测（尽量提前申请权限，失败仍继续尝试）
    async function ensureClipboardPermission() {
        try {
            if (!navigator.permissions || !navigator.clipboard) return true; // 无 Permissions API 时直接尝试
            const res = await navigator.permissions.query({ name: 'clipboard-write' });
            return res.state !== 'denied';
        } catch {
            return true;
        }
    }

    // 将图片作为 PNG 写入剪贴板（成功率更高）
    async function copyImageAsPngToClipboard(src) {
        return new Promise((resolve, reject) => {
            try {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.onload = async () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    canvas.toBlob(async (pngBlob) => {
                        if (!pngBlob) return reject(new Error('toBlob 失败'));
                        const canWrite = window.isSecureContext && !!(navigator.clipboard && navigator.clipboard.write) && typeof ClipboardItem !== 'undefined';
                        if (!canWrite) return reject(new Error('ClipboardItem 不可用或非安全上下文'));
                        try {
                            await navigator.clipboard.write([ new ClipboardItem({ 'image/png': pngBlob }) ]);
                            resolve();
                        } catch (err) {
                            reject(err);
                        }
                    }, 'image/png');
                };
                img.onerror = () => reject(new Error('图片加载失败'));
                img.src = src;
            } catch (e) {
                reject(e);
            }
        });
    }

    // 为菜单项绑定具体功能
    function setupContextMenuActions() {
        document.getElementById('menu-open-in-tab').addEventListener('click', () => {
            const imagePath = contextMenu.dataset.imagePath;
            if (imagePath) window.open(imagePath, '_blank');
        });

        document.getElementById('menu-copy-link').addEventListener('click', async (e) => {
            const imagePath = contextMenu.dataset.imagePath;
            if (!imagePath) return;

            const originalText = e.currentTarget.querySelector('span').textContent;
            const setTempText = (text) => {
                e.currentTarget.querySelector('span').textContent = text;
                setTimeout(() => {
                    e.currentTarget.querySelector('span').textContent = originalText;
                }, 1500);
            };

            const fullUrl = new URL(imagePath, window.location.href).href;

            // 1) 首选现代 Clipboard API
            try {
                const permitted = await ensureClipboardPermission();
                if (!permitted) throw new Error('clipboard 权限被拒');
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(fullUrl);
                    setTempText('已复制链接');
                    return;
                }
                throw new Error('writeText 不可用');
            } catch (err) {
                console.warn('现代剪贴板复制失败，尝试兼容方案: ', err);
            }

            // 2) 兼容方案：使用 execCommand('copy')
            try {
                const ta = document.createElement('textarea');
                ta.value = fullUrl;
                ta.style.position = 'fixed';
                ta.style.top = '-1000px';
                ta.setAttribute('readonly', '');
                document.body.appendChild(ta);
                ta.select();
                const ok = document.execCommand('copy');
                document.body.removeChild(ta);
                if (ok) {
                    setTempText('已复制链接(兼容)');
                    return;
                }
                throw new Error('execCommand 返回 false');
            } catch (err2) {
                console.warn('兼容复制失败，提供手动复制: ', err2);
            }

            // 3) 最终回退：提示手动复制
            window.prompt('复制失败，请手动复制以下链接：', fullUrl);
            setTempText('请手动复制');
        });

        document.getElementById('menu-copy-image').addEventListener('click', async (e) => {
            const imagePath = contextMenu.dataset.imagePath;
            if (!imagePath) return;
            const originalText = e.currentTarget.querySelector('span').textContent;
            const setTempText = (text) => {
                e.currentTarget.querySelector('span').textContent = text;
                setTimeout(() => {
                    e.currentTarget.querySelector('span').textContent = originalText;
                }, 1500);
            };

            try {
                const permitted = await ensureClipboardPermission();
                if (!permitted) throw new Error('clipboard 权限被拒');

                // 优先：将图片转为 PNG 后写入剪贴板（跨格式更稳定）
                await copyImageAsPngToClipboard(imagePath);
                setTempText('已复制图片');
                return;
            } catch (err) {
                console.warn('复制图片到剪贴板失败，回退为复制链接: ', err);
                const fullUrl = new URL(imagePath, window.location.href).href;

                // 回退1：现代 API 写入链接
                try {
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        await navigator.clipboard.writeText(fullUrl);
                        setTempText('已复制链接');
                        return;
                    }
                    throw new Error('writeText 不可用');
                } catch (err2) {
                    console.warn('writeText 失败，尝试 execCommand: ', err2);
                    // 回退2：execCommand 兼容
                    try {
                        const ta = document.createElement('textarea');
                        ta.value = fullUrl;
                        ta.style.position = 'fixed';
                        ta.style.top = '-1000px';
                        ta.setAttribute('readonly', '');
                        document.body.appendChild(ta);
                        ta.select();
                        const ok = document.execCommand('copy');
                        document.body.removeChild(ta);
                        if (ok) {
                            setTempText('已复制链接(兼容)');
                            return;
                        }
                        throw new Error('execCommand 返回 false');
                    } catch (err3) {
                        console.warn('execCommand 失败: ', err3);
                        setTempText('复制失败');
                        alert('复制失败，请在浏览器站点设置中允许剪贴板权限后重试');
                    }
                }
            }
        });
        
        document.getElementById('menu-download').addEventListener('click', () => {
            const imagePath = contextMenu.dataset.imagePath;
            const filename = contextMenu.dataset.filename;
            if (!imagePath || !filename) return;

            const link = document.createElement('a');
            link.href = imagePath;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }


    // --- 初始化页面 ---
    function init() {
        if (window.innerWidth <= 768) {
            document.body.classList.add('sidebar-collapsed');
        }
        populateSidebar();
        showCategory(0);
        setupContextMenuActions();
    }

    init();
});
