// UI Components Library
const Components = {
  // Toast notification
  toast(message, type = 'info') {
    const colors = {
      success: 'from-emerald-500 to-emerald-600',
      error: 'from-red-500 to-red-600',
      info: 'from-blue-500 to-blue-600',
      warning: 'from-amber-500 to-amber-600'
    };
    
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 right-6 px-6 py-4 rounded-2xl bg-gradient-to-r ${colors[type]} text-white font-medium shadow-2xl z-50 animate-fade-in-up`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },
  
  // Modal
  modal(content, options = {}) {
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6';
    overlay.innerHTML = `
      <div class="bg-[#0a0a1f] rounded-3xl p-8 max-w-lg w-full border border-white/10 animate-fade-in-up">
        ${options.title ? `<h3 class="text-2xl font-bold mb-4">${options.title}</h3>` : ''}
        <div class="text-white/70">${content}</div>
        ${options.showClose !== false ? '<button class="mt-6 w-full py-3 bg-white/10 rounded-xl hover:bg-white/20 transition" onclick="this.closest(\'[class*=fixed]\').remove()">إغلاق</button>' : ''}
      </div>
    `;
    
    if (options.closeOnOverlay !== false) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
      });
    }
    
    document.body.appendChild(overlay);
    return overlay;
  },
  
  // Loader
  loader(show = true) {
    const existingLoader = document.getElementById('global-loader');
    if (existingLoader) existingLoader.remove();
    
    if (show) {
      const loader = document.createElement('div');
      loader.id = 'global-loader';
      loader.className = 'fixed inset-0 bg-[#030014]/90 backdrop-blur-sm z-50 flex items-center justify-center';
      loader.innerHTML = `
        <div class="relative">
          <div class="w-16 h-16 border-4 border-primary/20 rounded-full"></div>
          <div class="absolute inset-0 w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      `;
      document.body.appendChild(loader);
    }
  }
};