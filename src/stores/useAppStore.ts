import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// 主题类型
export type Theme = 'light' | 'dark'

// 3D 场景状态
interface Scene3DState {
  cameraPosition: [number, number, number]
  rotationSpeed: number
  showWireframe: boolean
  animationEnabled: boolean
}

// 应用状态接口
interface AppState {
  // 主题相关
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  
  // 3D 场景相关
  scene3D: Scene3DState
  updateScene3D: (updates: Partial<Scene3DState>) => void
  resetScene3D: () => void
  
  // UI 状态
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  toggleSidebar: () => void
  
  // 加载状态
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  
  // 错误状态
  error: string | null
  setError: (error: string | null) => void
  clearError: () => void
}

// 默认的 3D 场景状态
const defaultScene3D: Scene3DState = {
  cameraPosition: [0, 0, 5],
  rotationSpeed: 1,
  showWireframe: false,
  animationEnabled: true,
}

// 创建状态管理器
export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        // 主题状态
        theme: 'light',
        setTheme: (theme) => set({ theme }),
        toggleTheme: () => set((state) => ({ 
          theme: state.theme === 'light' ? 'dark' : 'light' 
        })),
        
        // 3D 场景状态
        scene3D: defaultScene3D,
        updateScene3D: (updates) => set((state) => ({
          scene3D: { ...state.scene3D, ...updates }
        })),
        resetScene3D: () => set({ scene3D: defaultScene3D }),
        
        // UI 状态
        sidebarOpen: false,
        setSidebarOpen: (open) => set({ sidebarOpen: open }),
        toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
        
        // 加载状态
        isLoading: false,
        setIsLoading: (loading) => set({ isLoading: loading }),
        
        // 错误状态
        error: null,
        setError: (error) => set({ error }),
        clearError: () => set({ error: null }),
      }),
      {
        name: 'r3f-demo-storage',
        partialize: (state) => ({ 
          theme: state.theme,
          scene3D: state.scene3D 
        }),
      }
    ),
    {
      name: 'r3f-demo-store',
    }
  )
) 