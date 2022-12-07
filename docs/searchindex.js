Search.setIndex({"docnames": ["hello_world_module", "index", "participants", "tutorial-02-vm-kernel-install"], "filenames": ["hello_world_module.rst", "index.rst", "participants.rst", "tutorial-02-vm-kernel-install.rst"], "titles": ["Creating a Hello World Kernel Module", "UMN Kernel Dev Documentation", "Group Participants", "Kernel Install in VM"], "terms": {"These": [0, 3], "step": 0, "outlin": [0, 3], "how": [0, 2, 3], "modifi": 0, "tree": [0, 3], "includ": 0, "thi": [0, 2, 3], "onli": [0, 3], "perform": [0, 3], "trivial": 0, "task": 0, "print": 0, "messag": [0, 3], "consol": [0, 3], "when": [0, 2, 3], "i": [0, 2, 3], "remov": 0, "howev": [0, 3], "still": 0, "serv": 0, "us": [0, 2, 3], "illustr": 0, "ar": [0, 2, 3], "gener": [0, 3], "structur": 0, "integr": 0, "exist": [0, 3], "codebas": 0, "tutori": 0, "assum": 0, "you": [0, 2, 3], "alreadi": [0, 3], "have": [0, 2, 3], "work": [0, 2, 3], "virtual": [0, 3], "machin": [0, 2, 3], "set": [0, 3], "up": [0, 2, 3], "our": 0, "maiz": [0, 3], "server": [0, 2, 3], "abl": [0, 3], "compil": [0, 3], "yourself": 0, "vm": 0, "see": [0, 3], "earlier": 0, "custom": [0, 3], "complet": 0, "first": [0, 2, 3], "need": [0, 3], "simpl": 0, "should": [0, 3], "clone": [0, 3], "copi": [0, 3], "linux": [0, 2, 3], "previou": 0, "e": [0, 3], "someth": [0, 3], "like": [0, 2, 3], "follow": 0, "git": 0, "remot": [0, 3], "v": [0, 3], "origin": 0, "http": [0, 3], "org": 0, "pub": 0, "scm": 0, "torvald": 0, "fetch": 0, "push": 0, "we": 0, "local": [0, 3], "repositori": 0, "contain": 0, "branch": 0, "mai": [0, 3], "choos": 0, "activ": 0, "so": [0, 2, 3], "worthwhil": 0, "add": 0, "your": [0, 3], "own": [0, 3], "time": [0, 2, 3], "srv": 0, "next": 0, "ll": 0, "updat": [0, 3], "switch": 0, "hello_modul": 0, "avail": [0, 3], "some": [0, 2, 3], "ouptut": 0, "about": [0, 2, 3], "inform": 0, "track": 0, "master": [0, 2], "few": [0, 2], "chang": [0, 3], "upstream": 0, "In": [0, 2, 3], "short": 0, "whose": 0, "sole": 0, "purpos": 0, "string": 0, "goodby": 0, "A": [0, 2], "unit": 0, "can": [0, 3], "dynam": 0, "runtim": 0, "rather": 0, "than": [0, 3], "often": 0, "devic": 0, "driver": [0, 3], "allow": [0, 3], "specif": [0, 3], "hardwar": [0, 3], "which": [0, 2, 3], "run": [0, 2, 3], "leav": 0, "out": [0, 2, 3], "irrelev": 0, "The": [0, 3], "view": 0, "most": [0, 2, 3], "relev": 0, "stage": 0, "subdirectori": 0, "feel": [0, 2], "free": 0, "go": [0, 2, 3], "directori": [0, 3], "brows": 0, "its": [0, 3], "file": [0, 3], "editor": 0, "choic": 0, "item": [0, 3], "note": [0, 3], "summar": 0, "below": 0, "function": 0, "hello_world_init": 0, "hello_world_exit": 0, "call": 0, "respect": 0, "doesn": [0, 2, 3], "t": [0, 2, 3], "printf": 0, "accustom": 0, "userspac": 0, "program": [0, 2], "instead": 0, "printk": 0, "ha": [0, 2, 3], "similar": 0, "usag": [0, 3], "macro": 0, "bottom": 0, "specifi": [0, 3], "descript": 0, "author": [0, 3], "licens": 0, "requir": [0, 3], "ani": 0, "well": [0, 2], "form": 0, "spdx": 0, "identifi": 0, "also": [0, 2, 3], "It": 0, "shorthand": 0, "place": 0, "reproduc": 0, "full": 0, "text": [0, 3], "here": [0, 2], "gpl": 0, "version": [0, 2, 3], "2": [0, 3], "an": [0, 2, 3], "import": 0, "issu": [0, 2], "open": 0, "softwar": [0, 2], "develop": [0, 2], "beyond": 0, "scope": 0, "second": 0, "line": [0, 3], "larger": 0, "system": [0, 2, 3], "discuss": 0, "remain": 0, "hello_world_modul": 0, "rememb": 0, "built": [0, 3], "had": [0, 2], "befor": [0, 2, 3], "link": 0, "etc": 0, "could": 0, "take": [0, 3], "among": 0, "mani": [0, 2], "other": [0, 3], "thing": [0, 2, 3], "made": 0, "left": 0, "want": 0, "appli": 0, "same": [0, 3], "logic": 0, "kconfig": 0, "To": 0, "begin": 0, "default": [0, 3], "make": [0, 3], "defconfig": 0, "manual": [0, 3], "edit": 0, "just": [0, 3], "config": [0, 3], "comment": 0, "config_stag": 0, "read": 0, "y": 0, "immedi": 0, "config_hello_world": 0, "save": 0, "reconfigur": 0, "base": 0, "oldconfig": 0, "At": 0, "point": 0, "ahead": 0, "rebuild": 0, "hopefulli": 0, "sensibl": 0, "valu": 0, "j": 0, "flag": 0, "benefit": 0, "": [0, 1, 2, 3], "multipl": 0, "core": 0, "20": [0, 2], "get": [0, 3], "prompt": [0, 3], "inclus": 0, "type": [0, 2], "n": 0, "all": [0, 2, 3], "now": [0, 2, 3], "readi": 0, "wa": [0, 2], "cover": 0, "detail": 0, "instruct": 0, "recommend": 0, "snapshot": [0, 3], "current": [0, 2, 3], "state": [0, 3], "virsh": [0, 3], "ubuntu22": [0, 3], "before_hello": 0, "veri": 0, "brief": 0, "recap": 0, "mount": [0, 3], "host": [0, 3], "guestmount": [0, 3], "command": [0, 3], "filesystem": 0, "unmount": [0, 3], "guest": [0, 3], "guestunmount": [0, 3], "tool": 0, "initupd": 0, "ramf": 0, "grub": [0, 3], "reboot": [0, 3], "sever": [0, 3], "reflect": 0, "menu": [0, 3], "start": [0, 2, 3], "thei": 0, "look": [0, 2], "5": [0, 3], "15": [0, 3], "0": [0, 2, 3], "52": [0, 3], "6": [0, 2, 3], "1": [0, 2, 3], "rc7": 0, "00101": 0, "g01f85": 0, "00102": 0, "gabe44": 0, "came": [0, 2], "ubuntu": [0, 2, 3], "22": [0, 3], "04": [0, 2], "last": 0, "recent": 0, "cosol": 0, "probabl": [0, 2], "went": 0, "too": [0, 2], "quickli": 0, "notic": 0, "journalctl": 0, "review": 0, "log": [0, 3], "unam": [0, 3], "kerneldev": [0, 3], "b": 0, "appear": [0, 3], "screen": 0, "If": [0, 3], "search": 0, "output": [0, 3], "find": 0, "nov": 0, "29": [0, 3], "23": 0, "38": 0, "where": [0, 3], "date": 0, "differ": [0, 2], "congratul": [0, 3], "One": 0, "hint": 0, "indic": [0, 3], "two": [0, 2], "ago": 0, "3": [0, 2], "three": [0, 2], "actual": 0, "hack": 0, "introduc": 0, "bug": 0, "caus": 0, "panic": [0, 3], "fail": 0, "precis": 0, "why": 0, "within": [0, 3], "directli": 0, "real": 0, "address": 0, "habit": 0, "try": 0, "unproven": 0, "let": 0, "ubuntu_22": 0, "after_hello": 0, "domain": [0, 3], "sai": 0, "intention": 0, "error": [0, 3], "static": 0, "int": 0, "__init": 0, "void": 0, "char": 0, "null": 0, "return": [0, 3], "usual": [0, 2], "kernerl": 0, "expect": [0, 3], "kind": 0, "failur": [0, 3], "becaus": 0, "re": [0, 3], "dereferenc": 0, "pointer": 0, "along": 0, "end": [0, 2], "entri": 0, "0102": 0, "dirti": 0, "sinc": [0, 3], "uncommit": 0, "produc": 0, "occur": 0, "bunch": [0, 2], "diagnost": 0, "detach": 0, "session": [0, 3], "kei": 0, "sequenc": 0, "ctrl": [0, 3], "shut": 0, "down": [0, 3], "destroi": 0, "don": [0, 2], "worri": 0, "sound": 0, "more": [0, 2, 3], "seriou": 0, "off": 0, "won": 0, "lose": [0, 3], "anyth": 0, "result": [0, 3], "coupl": 0, "option": [0, 3], "continu": [0, 3], "being": [0, 3], "sure": [0, 2], "select": [0, 3], "Or": 0, "restor": [0, 3], "bring": 0, "back": [0, 2], "depend": [0, 2], "prone": 0, "process": [0, 2, 3], "alwai": [0, 2], "correct": [0, 3], "revert": 0, "success": 0, "m": [0, 2, 3], "incorpor": 0, "did": [0, 3], "recompil": 0, "reinstal": 0, "successfulli": 0, "automat": 0, "yet": 0, "affect": 0, "sudo": [0, 3], "modprob": 0, "observ": 0, "while": 0, "due": 0, "initi": [0, 3], "itself": 0, "stai": 0, "eventu": 0, "aim": 0, "care": 0, "tedium": 0, "around": 0, "part": 0, "fall": [0, 2], "prevent": [0, 3], "method": [0, 3], "execut": 0, "necessari": 0, "initramf": [0, 3], "anyon": 0, "would": [0, 3], "investig": 0, "know": [0, 3], "solut": 0, "valuabl": 0, "contribut": 0, "group": [0, 1, 3], "welcom": 1, "site": 1, "studi": 1, "particip": 1, "nathan": 2, "any": 2, "am": 2, "umn": [2, 3], "interest": 2, "learn": 2, "mainli": 2, "comput": 2, "vision": 2, "natur": 2, "languag": 2, "my": 2, "journei": 2, "mint": 2, "favorit": 2, "python": 2, "fellow": 2, "hawaiian": 2, "pizza": 2, "enjoy": 2, "jake": 2, "freeland": 2, "scienc": 2, "major": 2, "oper": 2, "low": 2, "level": 2, "architectur": 2, "qiana": 2, "2014": 2, "freebsd": 2, "user": [2, 3], "contributor": 2, "c": [2, 3], "happen": 2, "fan": 2, "evan": 2, "voogd": 2, "wsl": 2, "summer": 2, "freshman": 2, "year": 2, "vim": 2, "neutral": 2, "pineappl": 2, "khan": 2, "winter": 2, "beekeep": 2, "wound": 2, "jar": 2, "honei": 2, "happi": 2, "bear": 2, "bee": 2, "sting": 2, "count": 2, "shaun": 2, "loo": 2, "junior": 2, "sysadmin": 2, "acm": 2, "dj": 2, "radio": 2, "k": [2, 3], "14": 2, "favouit": 2, "cartoon": 2, "graviti": 2, "alec": 2, "lorim": 2, "graduat": 2, "school": [2, 3], "after": 2, "firmwar": [2, 3], "engin": 2, "undergrad": 2, "distribut": 2, "high": 2, "preform": 2, "bounc": 2, "between": [2, 3], "lazi": 2, "ca": 2, "hermann": 2, "embed": 2, "data": 2, "commun": 2, "brendan": 2, "gee": 2, "who": 2, "lot": 2, "experi": [2, 3], "excit": 2, "music": 2, "edm": 2, "check": [2, 3], "porter": 2, "robinson": 2, "minrui": 2, "tian": 2, "cloud": 2, "expos": 2, "kernel": 2, "taught": 2, "myself": 2, "mit": 2, "cours": 2, "828": 2, "lab": 2, "unix": 2, "xv6": 2, "project": 2, "from": [2, 3], "distribu": 2, "824": 2, "noah": 2, "hendrickson": 2, "graphic": [2, 3], "intersect": 2, "dabbl": 2, "bit": [2, 3], "mayb": 2, "rust": 2, "javascript": 2, "shhh": 2, "didn": 2, "admit": 2, "realli": 2, "kiwi": 2, "kirsten": 2, "ericson": 2, "topic": 2, "front": 2, "intern": 2, "target": 2, "fun": 2, "fact": 2, "me": 2, "pink": 2, "est": 2, "person": 2, "room": 2, "joel": 2, "kuehn": 2, "pursu": 2, "repurpos": 2, "old": [2, 3], "laptop": [2, 3], "minecraft": 2, "wai": [2, 3], "delici": 2, "juici": 2, "doe": 2, "belong": 2, "angi": 2, "chen": 2, "attempt": 2, "art": 2, "minor": [2, 3], "much": 2, "fond": 2, "bird": 2, "william": 2, "lin": 2, "hello": 2, "sophomor": 2, "wide": 2, "rang": 2, "what": 2, "settl": 2, "haven": 2, "mess": 2, "distro": 2, "arch": [2, 3], "prototyp": 2, "final": 2, "java": 2, "jada": 2, "lillebo": 2, "ocaml": 2, "hanan": 2, "abdirahman": 2, "love": 2, "movi": 2, "tv": 2, "show": [2, 3], "margaret": 2, "degen": 2, "sam": 2, "highbargin": 2, "primari": 2, "field": 2, "research": 2, "variou": [2, 3], "speci": 2, "wildcat": 2, "cute": 2, "kitten": 2, "ve": 2, "been": [2, 3], "ta": 2, "almost": 2, "class": 2, "cat": 2, "pictur": 2, "slide": 2, "alex": 2, "elder": 2, "chri": 2, "kauffman": [2, 3], "jack": 2, "kolb": 2, "teach": 2, "undergradu": 2, "8": 2, "keyword": 2, "ever": 2, "controversi": 2, "christoph": 3, "imag": 3, "plai": 3, "freshli": 3, "boot": 3, "ssh": 3, "myx500": 3, "edu": 3, "member": 3, "acceler": 3, "kvm": 3, "libvirt": 3, "miss": 3, "ask": 3, "admin": 3, "usermod": 3, "g": 3, "myusernam": 3, "environ": 3, "variabl": 3, "consid": 3, "addin": 3, "profil": 3, "each": 3, "login": 3, "export": 3, "libvirt_default_uri": 3, "via": 3, "script": 3, "amount": 3, "virt": 3, "share": 3, "sh": 3, "flaki": 3, "especi": 3, "loader": 3, "press": 3, "arow": 3, "highlight": 3, "password": 3, "linuxrock": 3, "l": 3, "58": 3, "smp": 3, "thu": 3, "oct": 3, "13": 3, "08": 3, "03": 3, "55": 3, "utc": 3, "2022": 3, "x86_64": 3, "gnu": 3, "escap": 3, "background": 3, "enter": 3, "displai": 3, "shutdown": 3, "ensur": 3, "proceed": 3, "mkdir": 3, "home": 3, "mnt": 3, "qcow2": 3, "sourc": 3, "build": 3, "cd": 3, "adjust": 3, "root": 3, "install_path": 3, "modul": 3, "modules_instal": 3, "install_mod_path": 3, "disk": 3, "list": 3, "properli": 3, "vmlinuz": 3, "rc2": 3, "00189": 3, "g23758867219c": 3, "fresh": 3, "map": 3, "symbol": 3, "initrd": 3, "img": 3, "ram": 3, "ramdisk": 3, "termin": 3, "creat": 3, "case": 3, "rdupdat": 3, "name": 3, "creation": 3, "11": 3, "09": 3, "05": 3, "54": 3, "57": 3, "0000": 3, "w": 3, "possibl": 3, "lib": 3, "i915": 3, "dg1_huc": 3, "bin": 3, "warn": 3, "selector": 3, "new": 3, "06": 3, "recoveri": 3, "mode": 3, "preempt_dynam": 3, "sat": 3, "21": 3, "27": 3, "42": 3, "shell": 3, "61": 3, "despit": 3, "littl": 3, "clunki": 3, "tremend": 3, "long": 3, "test": 3, "cycl": 3, "access": 3, "window": 3, "headless": 3, "workflow": 3, "appropri": 3, "reli": 3, "style": 3, "correctli": 3, "possibli": 3, "subsequ": 3, "provid": 3, "configur": 3, "featur": 3, "entir": 3, "small": 3, "hit": 3, "sidewai": 3, "hard": 3, "recov": 3, "gain": 3, "unfortun": 3, "support": 3, "permiss": 3, "ditch": 3, "favor": 3, "plain": 3, "effici": 3, "do": 3, "nice": 3, "manag": 3, "easi": 3, "forai": 3, "ideal": 3, "nograph": 3, "4096": 3, "cpu": 3, "enabl": 3, "bzimag": 3, "append": 3, "ttys0": 3, "dev": 3, "sda": 3, "hda": 3, "ubuntu22_work": 3, "setup": 3, "trickier": 3, "deriv": 3, "direct": 3, "launch": 3, "nickdesaulni": 3, "github": 3, "io": 3, "blog": 3, "2018": 3, "10": 3, "24": 3, "debug": 3, "gdb": 3, "describ": 3, "basic": 3, "attach": 3, "debugg": 3, "www": 3, "youtub": 3, "com": 3, "watch": 3, "x_5mnwbyt8i": 3, "demo": 3, "mirror": 3, "o": 3, "fit": 3, "doc": 3, "ibm": 3, "page": 3, "good": 3, "further": 3, "explor": 3, "interact": 3, "less": 3, "hypervisor": 3, "student": 3, "collect": 3, "contrast": 3, "privileg": 3, "singl": 3, "whole": 3, "overview": 3, "network": 3, "limit": 3, "wider": 3, "internet": 3, "BUT": 3, "cannot": 3, "INTO": 3, "one": 3, "better": 3, "bridg": 3, "helper": 3, "accord": 3, "virtiof": 3, "chosen": 3, "larg": 3, "appar": 3, "smaller": 3, "minimalist": 3, "occupi": 3, "space": 3, "conveni": 3, "desktop": 3, "gnome": 3, "nativ": 3}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"creat": 0, "hello": 0, "world": 0, "kernel": [0, 1, 3], "modul": 0, "synopsi": [0, 3], "preliminari": 0, "obtain": 0, "sourc": 0, "code": 0, "walk": 0, "through": 0, "hello_world": 0, "c": 0, "makefil": 0, "configur": 0, "instal": [0, 3], "boot": 0, "new": 0, "recov": 0, "from": 0, "broken": 0, "load": 0, "buggi": 0, "futur": [0, 3], "goal": 0, "build": 0, "script": 0, "umn": 1, "dev": 1, "document": 1, "group": 2, "particip": 2, "student": 2, "advisor": 2, "vm": 3, "tutori": 3, "step": 3, "advantag": 3, "caveat": 3, "altern": 3, "qemu": 3, "resourc": 3, "idea": 3, "discuss": 3}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Creating a Hello World Kernel Module": [[0, "creating-a-hello-world-kernel-module"]], "Synopsis": [[0, "synopsis"], [3, "synopsis"]], "Preliminaries": [[0, "preliminaries"]], "Obtaining the Source Code": [[0, "obtaining-the-source-code"]], "Walking Through the Source Code": [[0, "walking-through-the-source-code"]], "hello_world.c": [[0, "hello-world-c"]], "Makefile": [[0, "makefile"]], "Kernel Configuration": [[0, "kernel-configuration"]], "Kernel Installation": [[0, "kernel-installation"]], "Booting the New Kernel": [[0, "booting-the-new-kernel"]], "Recovering from a Broken Kernel": [[0, "recovering-from-a-broken-kernel"]], "Loading a Buggy Kernel Module": [[0, "loading-a-buggy-kernel-module"]], "Future Goal: Kernel Build Script": [[0, "future-goal-kernel-build-script"]], "UMN Kernel Dev Documentation": [[1, "umn-kernel-dev-documentation"]], "Group Participants": [[2, "group-participants"]], "Students": [[2, "students"]], "Advisors": [[2, "advisors"]], "Kernel Install in VM": [[3, "kernel-install-in-vm"]], "Tutorial Steps": [[3, "tutorial-steps"]], "Advantages": [[3, "advantages"]], "Caveats": [[3, "caveats"]], "Alternatives": [[3, "alternatives"]], "QEMU Resources": [[3, "qemu-resources"]], "Ideas for Future Discussion": [[3, "ideas-for-future-discussion"]]}, "indexentries": {}})